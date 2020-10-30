<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="/">Vue Shop</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-5 mr-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link pr-4">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link pr-4">Products</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">About</router-link>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @media (min-width: 992px) {

        .navbar.custom-nav {
            background-color: #fff !important;
        }
    }
</style>