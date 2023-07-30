
<script>

</script>
<template>
    <div class="py-6">
        <div class="container">
            <div class="row">
                <div class="col-xxl-5 col-xl-6 col-md-8 mx-auto">
                    <div class="bg-white rounded shadow-sm p-4 text-left">
                        <h1 class="h3 fw-600">Forgot password?</h1>
                        <p class="mb-4 opacity-60">Enter your email address to recover your password. </p>
                        <form method="POST" action="https://wal-marting.com/password/email">
                            <input type="hidden" name="_token" >
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" name="email">

                            </div>
                            <div class="form-group text-right">
                                <button class="btn btn-primary btn-block" type="submit">
                                    Send Password Reset Link
                                </button>
                            </div>
                        </form>
                        <div class="mt-3">
                            <a href="/login" class="text-reset opacity-60">Back to Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.form-group {
    margin-bottom: 1rem;
}
</style>
