<script>
export default {

}
</script>
<template>
    <div>
        <section class="pt-5 mb-4">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 mx-auto">
                        <div class="row aiz-steps arrow-divider">
                            <div class="col active">
                                <div class="text-center text-primary">
                                    <i class="fa-3x mb-2 fa fa-shopping-cart"></i>
                                    <h3 class="fs-14 fw-600 d-none d-lg-block">1. My Cart</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <i class="fa-3x mb-2 opacity-50 fa fa-map"></i>
                                    <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">2. Shipping info</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <i class="fa-3x mb-2 opacity-50 fa fa-truck"></i>
                                    <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">3. Delivery info</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <i class="fa-3x mb-2 opacity-50 fa fa-credit-card"></i>
                                    <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">4. Payment</h3>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <i class="fa-3x mb-2 opacity-50 fa fa-check-circle"></i>
                                    <h3 class="fs-14 fw-600 d-none d-lg-block opacity-50">5. Confirmation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mb-4" id="cart-summary">
            <div class="container">
                <div class="row">
                    <div class=" col-xl-10 mx-auto">
                        <div class="shadow-sm bg-white p-3 p-lg-4 rounded text-left">
                            <div class="mb-4">
                                <div class="row gutters-5 d-none d-lg-flex border-bottom mb-3 pb-3">
                                    <div class="col-md-5 fw-600">Product</div>
                                    <div class="col fw-600">Price</div>
                                    <div class="col fw-600">Tax</div>
                                    <div class="col fw-600">Quantity</div>
                                    <div class="col fw-600">Total</div>
                                    <div class="col-auto fw-600">Remove</div>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item px-0 px-lg-3">
                                        <div class="row gutters-5">
                                            <div class="col-lg-5 d-flex">
                                                <span class="mr-2 ml-0">
                                                    <img src="https://wal-marting.com/public/uploads/all/M3EEXPWLt8xD0m2UT7fONnA9rK4QBuITXJbCRqWN.jpg"
                                                        class="img-fit size-60px rounded"
                                                        alt="VEHHE Under Cabinet Paper Towel Holder, One Hand Operable Paper Towel Holder Wall Mount with Damping Effect, Self-Adhesive or Drilled for Kitchen, Bathroom. (Silver)">
                                                </span>
                                                <span class="fs-14 opacity-60">VEHHE Under Cabinet Paper Towel Holder, One
                                                    Hand Operable Paper Towel Holder Wall Mount with Damping Effect,
                                                    Self-Adhesive or Drilled for Kitchen, Bathroom. (Silver)</span>
                                            </div>

                                            <div class="col-lg col-4 order-1 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Price</span>
                                                <span class="fw-600 fs-16">$21.36</span>
                                            </div>
                                            <div class="col-lg col-4 order-2 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Tax</span>
                                                <span class="fw-600 fs-16">$0.00</span>
                                            </div>

                                            <div class="col-lg col-6 order-4 order-lg-0">
                                                <div class="row no-gutters align-items-center aiz-plus-minus me-2 ms-0">
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                                                        type="button" data-type="minus" data-field="quantity[19423]"
                                                        disabled="disabled">
                                                        <i class="fa fa-minus"></i>
                                                    </button>
                                                    <input type="number" name="quantity[19423]"
                                                        class="col border-0 text-center flex-grow-1 fs-16 input-number"
                                                        placeholder="1" value="1" min="1" max="1000"
                                                        onchange="updateQuantity(19423, this)">
                                                    <button class="btn col-auto btn-icon btn-sm btn-circle btn-light"
                                                        type="button" data-type="plus" data-field="quantity[19423]">
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-lg col-4 order-3 order-lg-0 my-3 my-lg-0">
                                                <span class="opacity-60 fs-12 d-block d-lg-none">Total</span>
                                                <span class="fw-600 fs-16 text-primary">$21.36</span>
                                            </div>
                                            <div class="col-lg-auto col-6 order-5 order-lg-0 text-right">
                                                <a href="javascript:void(0)" onclick="removeFromCartView(event, 19423)"
                                                    class="btn btn-icon btn-sm btn-soft-primary btn-circle">
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="px-3 py-2 mb-4 border-top d-flex justify-content-between">
                                <span class="opacity-60 fs-15">Subtotal</span>
                                <span class="fw-600 fs-17">$21.36</span>
                            </div>
                            <div class="row align-items-center ">
                                <div class="col-md-6 order-1 order-md-0 text-start">
                                    <a href="https://wal-marting.com" class="btn btn-link">
                                        <i class="fa fa-arrow-left"></i>
                                        Return to shop
                                    </a>
                                </div>
                                <div class="col-md-6 order-2 text-end d-block ">
                                    <button class="btn btn-primary fw-600" onclick="showCheckoutModal()">Continue to
                                    Shipping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>