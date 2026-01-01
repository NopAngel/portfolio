<?php
$name = "NopAngel";
$title = "Software Developer | Indie & Open Source";
$description = "Passionate about low-level systems development, productivity tools, and Unix philosophy.";

$languages = [
    "Expert" => [
        ["name" => "C", "icon" => "c", "color" => "cat-blue"],
        ["name" => "C++", "icon" => "cpp", "color" => "cat-sapphire"],
        ["name" => "Go", "icon" => "go", "color" => "cat-blue"],
        ["name" => "JS/TS", "icon" => "js", "color" => "cat-peach"],
        ["name" => "Python", "icon" => "py", "color" => "cat-blue"],
        ["name" => "Make", "icon" => "tools", "color" => "cat-mauve"]
    ],
    "Intermediate/Learning" => [
        ["name" => "Rust", "icon" => "rust", "color" => "cat-peach"],
        ["name" => "Java", "icon" => "java", "color" => "cat-mauve"],
        ["name" => "C#", "icon" => "csharp", "color" => "cat-green"],
        ["name" => "ASM", "icon" => "cpu", "color" => "cat-mauve"],
        ["name" => "Bash/Shell", "icon" => "terminal", "color" => "cat-green"],
        ["name" => "Docker", "icon" => "container", "color" => "cat-blue"]
    ]
];

$projects = [
    [
        "name" => "blueos",
        "description" => "An operating system developed from scratch for x86 architectures.",
        "tags" => ["C", "C++", "ASM", "Linker Script"],
        "color" => "cat-blue",
        "href" => "https://github.com/NopAngel/blueos"
    ],
    [
        "name" => "sushi-editor",
        "description" => "Minimalist text editor designed for speed and simplicity.",
        "tags" => ["Electron", "TypeScript"],
        "color" => "cat-green",
        "href" => "https://github.com/NopAngel/sushi"

    ],
    [
        "name" => "dragon",
        "description" => "A modern and fast alternative to Make focused on ease of use.",
        "tags" => ["C", "C++"],
        "color" => "cat-mauve",
        "href" => "https://github.com/NopAngel/dragon"

    ],
    [
        "name" => "emojix",
        "description" => "Interactive web tool for searching and managing emojis.",
        "tags" => ["Svelte", "TailwindCSS"],
        "color" => "cat-peach",
        "href" => "https://github.com/NopAngel/emojix"

    ]
];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $name; ?> Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.13.1/font/bootstrap-icons.min.css" integrity="sha512-t7Few9xlddEmgd3oKZQahkNI4dS6l80+eGEzFQiqtyVYdvcSG2D3Iub77R20BdotfRPA9caaRkg1tyaJiPmO0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        :root {
            --base: #1e1e2e;
            --mantle: #181825;
            --crust: #11111b;
            --text: #cdd6f4;
            --subtext: #bac2de;
            --mauve: #cba6f7;
            --blue: #89b4fa;
            --green: #a6e3a1;
            --peach: #fab387;
            --sapphire: #74c7ec;
            --surface0: #313244;
        }
        body { background-color: var(--base); color: var(--text); font-family: 'JetBrains Mono', 'Geist Mono', monospace; }
        .card { background-color: var(--mantle); border: 1px solid var(--surface0); transition: all 0.3s ease; }
        .card:hover { border-color: var(--mauve); transform: translateY(-4px); }
        .cat-mauve { color: var(--mauve); }
        .cat-blue { color: var(--blue); }
        .cat-green { color: var(--green); }
        .cat-peach { color: var(--peach); }
        .cat-sapphire { color: var(--sapphire); }
        .bg-mauve-soft { background-color: rgba(203, 166, 247, 0.1); }
    </style>
</head>
<body class="p-4 md:p-8 max-w-5xl mx-auto">

    <!-- Header -->
    <header class="mb-16 mt-16">
        <h1 class="text-5xl font-bold mb-2 cat-mauve"><?php echo $name; ?></h1>
        <p class="text-xl cat-blue mb-4"><?php echo $title; ?></p>
        <p class="text-subtext max-w-2xl leading-relaxed"><?php echo $description; ?></p>
    </header>

    <!-- Skills -->
    <section class="mb-16">
        <h2 class="text-2xl font-bold mb-8 border-b border-surface0 pb-2 border-[#313244]">Technical Arsenal</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <?php foreach ($languages as $level => $skills): ?>
                <div>
                    <h3 class="text-sm uppercase tracking-widest text-subtext mb-4"><?php echo $level; ?></h3>
                    <div class="flex flex-wrap gap-3">
                        <?php foreach ($skills as $skill): ?>
                            <span class="px-3 py-1 rounded-full text-sm card <?php echo $skill['color']; ?>">
                                <?php echo $skill['name']; ?>
                            </span>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>



    <!-- Projects -->
    <section>
        <h2 class="text-2xl font-bold mb-8 border-b border-surface0 pb-2 border-[#313244]">Forge & Labs</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <?php foreach ($projects as $project): ?>
                <div class="card p-6 rounded-xl">
                    <section class="flex items-center justify-between">
                        <h3 class="text-xl font-bold mb-2 <?php echo $project['color']; ?>">
                            ~/<?php echo $project['name']; ?>
                        </h3>
                        <a href="<?php $project['href'] ?>">
                            <i class="bi bi-github"></i>
                        </a>
                    </section>
                    <p class="text-subtext text-sm mb-4"><?php echo $project['description']; ?></p>
                    <div class="flex flex-wrap gap-2">
                        <?php foreach ($project['tags'] as $tag): ?>
                            <span class="text-[10px] uppercase px-2 py-1 bg-surface0 rounded text-text ">
                                <?php echo $tag; ?>
                            </span>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <footer class="mt-20 pt-8 border-t border-surface0 text-center text-subtext text-sm border-[#313244] flex items-center justify-between">
        <p>@Copyright 2025 NopAngel</p>
        <a href="https://github.com/NopAngel/" class="bi bi-github"></a>
    </footer>

</body>
</html>
