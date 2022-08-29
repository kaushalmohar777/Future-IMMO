import React, { Component } from 'react'
// import Client from 'shopify-buy';
import Client from 'shopify-buy/index.unoptimized.umd';

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'futureimmo.myshopify.com',
    storefrontAccessToken: '4f7827260cf8a71cafd1b3335c0acc86'
  });



export class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        model: {},
        checkout: {},
        isCartOpen: false,
      };

      componentDidMount() {
        // this.createCheckout();
    
        //Check if localStorage has a checkout_id saved
        if (localStorage.checkout) {
          this.fetchCheckout(localStorage.checkout);
        } else {
          this.createCheckout();
        }
        //if there is no checkout_id in localStorage then we will create a new checkout
    
        //else fetch the checkout from shopify
      }
    
      createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout", checkout.id);
        await this.setState({ checkout: checkout });
      };
    
      fetchCheckout = async (checkoutId) => {
        client.checkout
          .fetch(checkoutId)
          .then((checkout) => {
            this.setState({ checkout: checkout });
          })
          .catch((err) => console.log(err));
      };
    
      addItemToCheckout = async (variantId, quantity) => {
        const lineItemsToAdd = [
          {
            variantId,
            quantity: parseInt(quantity, 10),
          },
        ];
        const checkout = await client.checkout.addLineItems(
          this.state.checkout.id,
          lineItemsToAdd
        );
        this.setState({ checkout: checkout });
        console.log(checkout);
    
        this.openCart();
      };

      removItemToCart = async (lineItemIds) =>{
        const lineItemIdsToRemove = [
          lineItemIds
        ];

        const checkout = await client.checkout.removeLineItems(
          this.state.checkout.id,
          lineItemIdsToRemove
        );

        this.setState({ checkout: checkout });
        console.log(checkout);

      }

    
      fetchAllProducts = async () => {
        const products = await client.product.fetchAll();
        this.setState({ products: products });
      };
    
      fetchProductWithId = async (handle) => {
        const product = await client.product.fetchByHandle(handle);
        this.setState({ product: product });
        console.log(JSON.stringify(product));
    
        return product;
      };

      customqery = async () => {

          const productsQuery = client.graphQLClient.query((root) => {
            root.addConnection('products', {args: {first: 10}}, (product) => {
              product.add('title');
              product.add('tags');// Add fields to be returned
            });
          });

            // Call the send method with the custom products query
             client.graphQLClient.send(productsQuery).then(({model, data}) => {
              // Do something with the products
              //console.log('new',model);
              this.setState({ model: model });
            });

      };

    
      closeCart = () => {
        this.setState({ isCartOpen: false });
      };
      openCart = () => {
        this.setState({ isCartOpen: true });
      };


  render() {
    return (
     <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
          removItemToCart: this.removItemToCart,
          customqery: this.customqery,

        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
