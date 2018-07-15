<template>
  <!-- Left Sidebar  -->
  <div class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
    <!-- Sidebar navigation-->
    <nav class="sidebar-nav">
      <ul id="sidebarnav">
        <li class="nav-devider"></li>
        <li>
            <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-tachometer"></i><span class="hide-menu">Dashboard <span class="label label-rouded label-primary pull-right">2</span></span></a>
            <ul aria-expanded="false" class="collapse">
            <li><a href="index-2.html">Ecommerce </a></li>
            <li><a href="index1.html">Analytics </a></li>
            </ul>
        </li>
        <li>
          <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-book"></i><span class="hide-menu">Pages <span class="label label-rouded label-success pull-right">8</span></span></a>
          <ul aria-expanded="false" class="collapse">
            <li>
                <a href="#" class="has-arrow">Authentication <span class="label label-rounded label-success">6</span></a>
                <ul aria-expanded="false" class="collapse">
                <li><a href="page-login.html">Login</a></li>
                <li><a href="page-register.html">Register</a></li>
                <li><a href="page-invoice.html">Invoice</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="has-arrow">Error Pages</a>
                <ul aria-expanded="false" class="collapse">
                <li><a href="page-error-400.html">400</a></li>
                <li><a href="page-error-403.html">403</a></li>
                <li><a href="page-error-404.html">404</a></li>
                <li><a href="page-error-500.html">500</a></li>
                <li><a href="page-error-503.html">503</a></li>
                </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </div>
  <!-- End Left Sidebar  -->
</template>

<script>
export default {
  name: 'SideBar'
}
</script>
