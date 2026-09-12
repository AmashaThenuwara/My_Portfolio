@extends('layouts.app')

@section('content')

<section class="px-10">

    <h1 class="text-4xl text-center text-purple-400 mb-10">
        Skills
    </h1>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

        @php
        $skills = ["Laravel","PHP","Java","Python","JS","MySQL","Kotlin","Git"];
        @endphp

        @foreach($skills as $skill)
        <div class="card text-center">
            {{ $skill }}
        </div>
        @endforeach

    </div>

</section>

@endsection
