<template>
    <div class="products" id="products">
        <div class="container py-5">
            <h1 class="text-center p-5">Our Products</h1>
            <div class="row">

                <div class="col-md-4">
                    <div class="card product-item">
                        <img src="https://www.citizenwatches.co.in/uploads/images/orginal/43054314ac6533d6ff25062d9795aee7.jpg"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Citizen AR5024-01E</h5>
                            <h6 class="text-muted">₹ 2,55,000</h6>
                            <p class="card-text">
                                Complete your device with Office 365 and get 1TB cloud storage, Excel, Word, PowerPoint
                                and more. Select your suite during checkout.
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card product-item">
                        <img src="https://www.citizenwatches.co.in/uploads/images/orginal/8576597261a2c0b9573b63f181552136.jpg"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Citizen AR5025-08E</h5>
                            <h6 class="text-muted">₹ 2,65,000</h6>

                            <p class="card-text">
                                Style and speed. Go beyond the traditional with new Surface Laptop 2. Featuring improved
                                performance and the full Windows 10 Home experience.
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card product-item">
                        <img src="https://www.citizenwatches.co.in/uploads/images/orginal/21ffc441bbd7a1cb60df8ae9e02aa0ed.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Citizen AR5026-05A</h5>
                            <h6 class="text-muted">₹ 2,75,000</h6>
                            <p class="card-text">
                                The ultimate creative studio. Let your ideas flow with brilliant color, blazing
                                graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.

                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Products",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products {
        background: #f2f2f2;
        width: 100%;
        height: 100%;
        margin: 100px auto;
    }

    img {
        height: auto;
        width: 250px;
        margin: 25px auto 25px auto;
    }
</style>