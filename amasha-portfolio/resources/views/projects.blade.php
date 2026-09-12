@extends('layouts.app')

@section('content')

<section class="text-center">

    <h1 class="text-4xl text-purple-400 mb-10">
        Projects Hub
    </h1>

    <div class="grid grid-cols-2 gap-6 px-10">

        <a href="/projects/project1" class="card">Project 1</a>
        <a href="/projects/project2" class="card">Project 2</a>
        <a href="/projects/project3" class="card">Project 3</a>
        <a href="/projects/project4" class="card">Project 4</a>

    </div>

</section>

@endsection
