<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Meta -->
    <meta name="description" content="Responsive Bootstrap 4 Dashboard and Admin Template">
    <meta name="author" content="ThemePixels">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('img/favicon.png')}}">

    <title>{{ config('app.name', 'Remit Scanner') }}</title>

    <!-- template css -->
    <link rel="stylesheet" href="{{asset('assets/css/cassie.css')}}">

</head>
<body>
@yield('content')
<script src="{{ asset('js/main.js') }}"></script>
</body>
</html>
