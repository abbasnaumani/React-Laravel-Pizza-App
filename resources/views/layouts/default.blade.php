<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{asset('images/favicon.png')}}">
    <title>{{ config('app.name', 'Remit Scanner') }}</title>
    <!-- Styles -->
    {{--    <link href="{{ asset('css/app.css') }}" rel="stylesheet">--}}
    <link rel="stylesheet" href="{{asset('assets/css/cassie.css')}}">
</head>
<body>
<main>
    @yield('content')
</main>
<script src="{{ asset('js/main.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>
</body>
</html>
