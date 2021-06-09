import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../src/user/SignIn';
import SignUp from '../src/user/SignUp';
import HomePage from '../src/page/HomePage';
import NotFound from './page/NotFound';
import ProductPage from './page/ProductPage';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Listproduct from './components/Listproduct';
import ListCategory from './components/ListCategory';
import ListBlog from './components/ListBlog';
import ListContact from './components/ListContact';
import ListUser from './components/ListUser';
import DetailProduct from './page/DetailProduct';
import AddProduct from './page/AddProduct';
import AddCategory from './page/AddCategory';
import AddBlog from './page/AddBlog';
import LayOutWebsite from './layouts/LayOutWebsite';
import LayOutAdmin from './layouts/LayOutAdmin'
import catePage from './page/catePage';
import DetailBlog from './page/DetailBlog';
import UpdataProduct from './page/UpdataProduct';
import UpdateCategory from './page/UpdateCategory';
import BlogUpdate from './page/BlogUpdate';
import Dashboard from './components/dashboard';

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?">
                    <LayOutAdmin>
                        <Switch>
                            <Route exact path="/admin/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/admin/listProduct">
                                <Listproduct />
                            </Route>
                            <Route exact path="/admin/listCategory">
                                <ListCategory />
                            </Route>
                            <Route exact path="/admin/listBlog">
                                <ListBlog />
                            </Route>
                            <Route exact path="/admin/listContact">
                                <ListContact />
                            </Route>
                            <Route exact path="/admin/listUser">
                                <ListUser />
                            </Route>
                            <Route exact path="/admin/addProduct">
                                <AddProduct />
                            </Route>
                            <Route exact path="/admin/addCategory">
                                <AddCategory />
                            </Route>
                            <Route exact path="/admin/addBlog">
                                <AddBlog />
                            </Route>
                            <Route path="/admin/cateUpdate/:id" exact component={UpdateCategory} />
                            <Route path="/admin/productUpdate/:id" exact component={UpdataProduct} />
                            <Route path="/admin/blogUpdate/:id" exact component={BlogUpdate} />
                            <Route path="*">
                                <div className="pt-3">
                                    <div className="bg-white mx-auto">
                                        <h1 className="bottom-22 left-1/3 font-extrabold text-3xl text-blue-800 bg-white absolute">  Error 404. Not Found Page</h1>
                                        <img className="opacity-30 left-10 absolute w-28 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
                                        <img className=" opacity-30 absolute right-11 w-32 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
                                        <img className="mx-auto opacity-30 w-2/12 top-1/3 mt-16" src="https://cdn.pixabay.com/photo/2012/04/01/19/42/gears-24272_640.png" />
                                    </div >
                                </div>
                            </Route>
                        </Switch>
                    </LayOutAdmin >
                </Route>
                <Route>
                    <LayOutWebsite {...props}>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            {/* <Route {...props} path="/signin" exact component={SignIn} /> */}

                            <Route exact path="/signin">
                                <SignIn {...props} />
                            </Route>

                            <Route path="/signup" exact component={SignUp} />
                            <Route path="/productPage" exact component={ProductPage} />
                            <Route path="/blogPage" exact component={Blog} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/catePage/:id" exact component={catePage} />
                            <Route path="/product/:id" exact component={DetailProduct} />
                            <Route path="/blog/:id" exact component={DetailBlog} />
                            <Route path="*" exact component={NotFound} />

                        </Switch>

                    </LayOutWebsite>
                </Route>

            </Switch>



        </Router >
    )
}
export default Routes;
