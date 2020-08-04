import React from 'react';
import './App.css';
import About from './About';
import Item from './Item';
import Movie from './Components/Movie';


let todo1 = "TO DO LIST 1"
let todo2 = "TO DO LIST 2"
let isBig = true;

let productList = [
  {
    link: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    product: 'cocooil',
    price: '30$',
    description: 'body oil'
  },
  {
    link: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    product: 'Polaroid',
    price: '60$',
    description: 'Some Picture'
  },
  {
    link: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    product: 'Maui Moisture',
    price: '20$',
    description: 'Bambo fibers'
  }
]

let movies = [
  {
    title: 'Splinter Cell',
    year: 2017,
    genre: 'Action, Adventure, Crime',
    director: 'Doug Liman',
  },
  {
    title: 'Wonder Woman',
    year: 2017,
    genre: 'Action, Adventure, Fantasy',
    director: 'Patty Jenkins'
  },
  {
    title: 'The Only Living Boy in New York',
    year: 2017,
    genre: 'Drama',
    director: 'Marc Webb',
  }
]

function App() {
  return (
    <div className="App">
      {/* <About inhalt={'try something with props'} super={2} /> */}

      {/* { <section>
        <Item link={"https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
          product={'cocooil'}
          price={'30$'}
          description={'body oil'}
        />
        <Item link={productList[1].link}
          product={productList[1].product}
          price={productList[1].price}
          description={productList[1].description}
        />
        <Item
          link={productList[2].link}
          product={productList[2].product}
          price={productList[2].price}
          description={productList[2].description}
        />
      </section> } */}

      <section>
        <Movie link={"https://img.gameswelt.de/public/images/202007/aff5db506ecfed7dc752444e7fe9deba.jpg"}
          title={"Splinter Cell"}
          year={"2017"}
          genre={"Action, Adventure, Crime"}
          director="Doug Liman"
        />
        <Movie
          link={"https://www.superheldenfilme.net/wp-content/uploads/2020/04/wonder-woman-1984-in-wonder-woman-1984-wird-die-kontinuitaet-von-batman-v-superman-dawn-of-justice-bestehen-bleiben.jpg"}
          title={"Wonder Woman"}
          year={"2017"}
          genre={"Action, Adventure, Fantasy"}
          director="Patty Jenkins"
        />
        <Movie
          link={"https://static01.nyt.com/images/2017/08/11/arts/11onlyliving/11onlyliving-superJumbo.jpg"}
          title={"The Only Living Boy in New York"}
          year={"2017"}
          genre={"Drama"}
          director="Marc Webb"
        />
      </section>
    </div>
  );
}

export default App;
