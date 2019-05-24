import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  //   get unique categories using "Set" object
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      pastItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }
  //   handle filtering
  handleItems = category => {
    //   1st case: all items in the category array
    let allItems = [...this.state.items]
    // if all is selected, the all items are displayed
    if (category === "all") {
      this.setState(() => {
        //   pass into the pastItems (in the state) all the items
        return { pastItems: allItems }
      })
    } else {
      // if a particular category is selected, check if the selected category is equal to the category of items in the product array
      let items = allItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        //   then in the pastItems, only pass the items which match that category
        return { pastItems: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Some of our products" />
            {/* categories */}
            <div className="row mb-5">
              {/* render buttons which contain category names */}
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      className="btn btn-yellow text-capitalize m-3"
                      key={index}
                      onClick={() => this.handleItems(category)}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/* items */}
            <div className="row">
              {this.state.pastItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <Img fixed={node.image.fixed} />

                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">${node.price}</h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Some of Our Products" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>No Products to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
