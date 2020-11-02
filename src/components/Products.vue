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
                                <th>Tags</th>
                                <th>Image</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products">
                                <td>{{product.name}}</td>
                                <td>{{product.price}}</td>
                                <td>
                                    <span v-for="tag in product.tags">{{tag}} </span>
                                </td>
                                <td>
                                    <span class="form-img mx-2" v-for="image in product.images"><img :src="image" alt=""></span>
                                </td>
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
                                    <vue-editor v-model="product.description"></vue-editor>
                                    <!-- <textarea rows="10" type="text" placeholder="Product Description"
                                        class="form-control" v-model="product.description"></textarea> -->
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
                                    <input type="text" v-on:keyup.188="addTag()" placeholder="Product tags"
                                        v-model="tag" class="form-control">
                                    <!-- <span v-for="tag in this.product.tags">{{tag}} </span> -->

                                    <div class="d-flex">
                                        <span class="text-muted p-1" v-for="tag in this.product.tags">{{tag}}</span>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="product_image">Product Images</label>
                                    <input type="file" @change="uploadImage" class="form-control file-btn">
                                </div>

                                <div class="form-group d-flex">
                                    <div class="form-img mx-2" v-for="image in product.images">
                                        <img :src="image" alt="">
                                        <button type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true" @click="deleteImage(image,index)">&times;</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save
                            Changes</button>
                        <button @click="updateProduct()" type="button" class="btn btn-primary"
                            v-if="modal == 'edit'">Apply Changes</button>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import {
        VueEditor
    } from "vue2-editor";
    import {
        firestore
    } from 'firebase'
    import {
        fb,
        db
    } from '../firebase'

    export default {
        name: 'Products',
        components: {
            VueEditor
        },
        data() {
            return {
                products: [],
                product: {
                    name: null,
                    description: null,
                    price: null,
                    images: [],
                    tags: [],
                },
                activeItem: null,
                modal: null,
                tag: null
            }
        },
        firestore() {
            return {
                products: db.collection('products')
            }
        },
        methods: {
            reset() {
                this.product = {
                    name: null,
                    description: null,
                    price: null,
                    images: [],
                    tags: []
                }
            },
            addNew() {
                this.modal = 'new'
                this.reset()
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
            },
            addTag() {
                console.log('Pressing Comma');
                this.product.tags.push(this.tag)
                this.tag = ""
            },
            uploadImage(e) {
                if (e.target.files[0]) {

                    console.log(e.target.files[0]);
                    var file = e.target.files[0];
                    var storageRef = fb.storage().ref('products/' + file.name);
                    var uploadTask = storageRef.put(file)

                    uploadTask.on('state_changed', (snapshot) => {
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    }, (error) => {
                        // Handle unsuccessful uploads
                    }, () => {
                        // Handle successful uploads on complete
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            this.product.images.push(downloadURL)
                        });
                    });

                }
            },
            deleteImage(img, index) {
                let image = fb.storage().refFromURL(img);
                this.product.images.splice(index, 1);
                image.delete().then(() => {
                    console.log('Image Deleted');
                }).catch((error) => {
                    console.log('Error!');
                });
            },

        }
    }
</script>

<style scoped lang="scss">
    .file-btn {
        height: 45px;
    }

    .form-img img {
        height: 80px;
        width: auto;
    }
</style>