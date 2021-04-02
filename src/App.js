import React,{useEffect,useState} from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/ShopPage.componet'
import SignInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component'
import {Switch,Route} from 'react-router-dom'
import Header from './components/header/header.component'
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.utils'


function App() {
  const [currentUser,setCurrentUser] = useState()

  //const unsubscribeFromAuth = null;

  useEffect (() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( async  userAuth => {
        if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);


            userRef.onSnapshot(snapshot => {

              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              })
            }) 
            setCurrentUser({currentUser : userAuth})
           
        }
        console.log(userAuth)
        return () => {
          unsubscribeFromAuth();
        }
        
      })

    },[])
  return (
    <div> 
    <Header currentUser ={ currentUser} />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/signin' component={SignInAndSignUpPage} />
      </Switch>

    </div>
  );
}
export default App;
