<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amasha Portfolio</title>

    @vite(['resources/css/app.css','resources/css/custom.css','resources/js/app.js'])
</head>

<body>

<!-- Glow Background -->
<div class="bg-glow">
    <div class="glow-1"></div>
    <div class="glow-2"></div>
</div>

@include('components.navbar')

<main style="padding-top:100px;">
    @yield('content')
</main>

@include('components.footer')

</body>
</html>
