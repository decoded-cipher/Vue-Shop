<template>
    <div class="products">

        <div class="container">
            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Products Page</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus
                            totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga,
                            voluptas ab praesentium nihil?</p>
                    </div>
                    <div class="col-md-6 mt-5">
                        <img src="/img/svg/products.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="my-5">
                <hr>
            </div>

            <div class="product-test mb-5">
                <h3 class="d-inline-block">Product List</h3>
                <button @click="addNew()" class="btn btn-primary float-right px-5 py-2 mb-2">Add Product</button>
                <div class="table-responsive">
                    <table class="table">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products">
                                <td>{{product.name}}</td>
                                <td>{{product.price}}</td>
                                <td>{{product.description}}</td>
                                <td>
                                    <button class="btn btn-primary" @click="editProduct(product)">Edit Product</button>
                                    <button class="btn btn-danger ml-3" @click="deleteProduct(product)">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



        <!-- Modal -->
        <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">Edit Product</h5>
                        <h5 class="modal-title" id="editLabel" v-if="modal == 'new'">Add New Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <!-- main product -->
                            <div class="col-md-8">
                                <div class="form-group">
                                    <input type="text" placeholder="Product Name" v-model="product.name"
                                        class="form-control">
                                </div>

                                <div class="form-group">
                                    <textarea rows="10" type="text" placeholder="Product Description"
                                        class="form-control" v-model="product.description"></textarea>
                                </div>
                            </div>
                            <!-- product sidebar -->
                            <div class="col-md-4">
                                <h4 class="display-6">Product Details</h4>
                                <hr>

                                <div class="form-group">
                                    <input type="text" placeholder="Product price" v-model="product.price"
                                        class="form-control">
                                </div>

                                <div class="form-group">
                                    <input type="text" placeholder="Product tags" v-model="product.tag"
                                        class="form-control">

                                    <!-- <div class="d-flex">
                                        <p>
                                            <span class="p-1">{{tag}}</span>
                                        </p>

                                    </div> -->
                                </div>


                                <div class="form-group">
                                    <label for="product_image">Product Images</label>
                                    <input type="file" class="form-control file-btn">
                                </div>

                                <!-- <div class="form-group d-flex">
                                    <div>
                                        <div class="img-wrapp">
                                            <img :src="image" alt="" width="80px">
                                            <span class="delete-img" @click="deleteImage(image,index)">X</span>
                                        </div>
                                    </div>
                                </div> -->

                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save Changes</button>
                        <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply Changes</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import { firestore } from 'firebase'
    import { fb, db } from '../firebase'

    export default {
        name: 'Products',
        data() {
            return {
                products: [],
                product: {
                    name: null,
                    description: null,
                    price: null,
                    tag: null,
                    Image: null
                },
                activeItem: null,
                modal: null
            }
        },
        firestore() {
            return {
                products: db.collection('products')
            }
        },
        methods: {
            addNew() {
                this.modal = 'new'
                $("#product").modal('show')
            },
            addProduct() {
                this.$firestore.products.add(this.product)
                $("#product").modal('hide')
                Toast.fire({
                    icon: 'success',
                    title: 'New Product Added Successfully'
                })
            },
            deleteProduct(product) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // console.log(product.id);
                        this.$firestore.products.doc(product.id).delete()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            },
            editProduct(product) {
                this.modal = 'edit'
                this.product = product
                // this.activeItem = product.id
                $("#product").modal('show')
            },
            updateProduct(product) {
                this.$firestore.products.doc(this.product.id).update(this.product)
                $("#product").modal('hide')
                // console.log('Updated Item');
                Toast.fire({
                    icon: 'success',
                    title: 'Product Updated Successfully'
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .file-btn {
        height: 45px
    }
</style>