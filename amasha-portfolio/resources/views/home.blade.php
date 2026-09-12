@extends('layouts.app')

@section('content')

<section class="min-h-screen flex flex-col md:flex-row items-center justify-between px-10">

    <div>

        <h1 class="text-6xl font-bold">
            Hi, I'm <span class="text-purple-400">Amasha</span>
        </h1>

        <p class="text-gray-400 mt-4">
            Software Engineering Student | AI | IoT | Laravel Developer
        </p>

        <div class="mt-8 flex gap-4">

            <a href="/projects" class="btn-primary">
                View Projects
            </a>

            <a href="/projects" class="card">
                Explore
            </a>

        </div>

    </div>

    <img src="https://i.pravatar.cc/300"
         class="w-72 rounded-full border-4 border-purple-500 shadow-lg">

</section>

@endsection
