<template>
    <div class="products">
        <div class="container">

            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Profile Page</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus
                            totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga,
                            voluptas ab praesentium nihil?</p>
                    </div>
                    <div class="col-md-6 mt-5">
                        <img src="/img/svg/profile.svg" width="400" alt="" class="img-fluid">
                    </div>
                </div>
            </div>

            <div class="my-5"><hr></div>

            <div class="profile-content">
                <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

                    <li class="nav-item">
                        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                            aria-controls="profile" aria-selected="true">Profile</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" id="account-tab" data-toggle="tab" href="#account" role="tab"
                            aria-controls="account" aria-selected="false">Account settings</a>
                    </li>

                </ul>

                <div class="tab-content mb-5" id="myTabContent">
                    <div class="tab-pane fade show active pt-3" id="profile" role="tabpanel"
                        aria-labelledby="profile-tab">

                        <div class="container">
                            <div class="row">

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="" v-model="profile.name" placeholder="Full name"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" v-model="profile.phone" placeholder="Phone"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" v-model="profile.address" placeholder="Address"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-8">
                                    <div class="form-group">
                                        <input type="text" v-model="profile.postCode" placeholder="Postcode"
                                            class="form-control">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="submit" @click="updateProfile()" value="Save Changes"
                                            class="btn btn-primary w-100">
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                        <div class="container">
                            <div class="row">

                                <!-- <div class="col-md-">
                                    <div class="alert alert-info">
                                        Please use the Reset password email button for reseting the password. The form
                                        doens't work currently
                                    </div>
                                </div> -->
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="User name"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Email address"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="New password"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Confirm password" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="file" class="form-control file-btn">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="button" @click="resetPassword()" value="Reset password through Email"
                                            class="btn btn-success w-100">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import { fb, db } from '../firebase'

    export default {
        name: 'Profile',
        data() {
            return {
                profile: {
                    name: null,
                    phone: null,
                    address: null,
                    postCode: null
                },

                account: {
                    name: null,
                    email: null,
                    photoUrl: null,
                    emailVerified: null,
                    password: null,
                    confirmPassword: null,
                    uid: null
                }
            }
        },
        firestore() {
            var user = fb.auth().currentUser;
            // console.log(user.uid);
            return {
                profile: db.collection('profiles').doc(user.uid)
            }
        },
        methods: {
            updateProfile() {
                this.$firestore.profile.update(this.profile)
            },
            resetPassword() {
                var auth = fb.auth();
                console.log(auth.currentUser);
                auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
                    // console.log("Email Send:");
                    Toast.fire({
                        icon: 'success',
                        title: 'Email to Reset Password has been sent'
                    })
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .file-btn {
        height: 45px;
    }
</style>