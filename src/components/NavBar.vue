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
                        <a class="btn btn-outline-success my-1 py-2 px-5" type="submit" data-toggle="modal" data-target="#login">Get Started</a>
                        <a class="btn btn-outline-info border-0 my-1 py-2 px-3 mx-2" data-toggle="modal" data-target="#miniCart">
                            <i class="fas fa-cart-plus"></i>
                        </a>
                    </form>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {}
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