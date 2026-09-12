@extends('layouts.app')

@section('content')

<section class="min-h-screen px-20 py-32">

    <div class="flex flex-col items-center">

        <img
            src="https://i.pravatar.cc/250"
            class="w-60 h-60 rounded-full border-4 border-purple-500 shadow-[0_0_50px_#8b5cf6]"
        >

        <h1 class="text-5xl font-bold mt-8 text-purple-500">
            About Me
        </h1>

        <p class="max-w-3xl text-center mt-8 text-gray-400 leading-8">

            I am an undergraduate Software Engineering student
            passionate about Laravel Development, AI, IoT,
            UI/UX Design and Full Stack Development.

            I enjoy creating modern web applications and
            solving real-world problems through technology.

        </p>

    </div>

</section>

@endsection
