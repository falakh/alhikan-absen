<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <style>
        html {
            height: 100%;
        }

        body {
            height: 100%;
            width: 100%;
            margin: 0;
            position:fixed
        }

        #example {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
<div id="example"></div>
<script src="{{ asset('public/js/app.js') }}"></script>
</body>
</html>
