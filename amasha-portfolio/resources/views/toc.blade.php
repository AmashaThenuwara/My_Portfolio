@extends('layouts.app')

@section('content')

<section class="min-h-screen flex flex-col justify-center px-32">

    <h1 class="text-6xl font-bold mb-12 text-purple-500">
        TABLE OF CONTENTS
    </h1>

    <div class="space-y-6 text-3xl">

        <a href="/about" class="block hover:text-purple-400">
            01 About Me
        </a>

        <a href="/skills" class="block hover:text-purple-400">
            02 Skills
        </a>

        <a href="/education" class="block hover:text-purple-400">
            03 Education
        </a>

        <a href="/projects" class="block hover:text-purple-400">
            04 Projects
        </a>

        <a href="/certificates" class="block hover:text-purple-400">
            05 Certificates
        </a>

        <a href="/contact" class="block hover:text-purple-400">
            06 Contact
        </a>

    </div>

</section>

@endsection
