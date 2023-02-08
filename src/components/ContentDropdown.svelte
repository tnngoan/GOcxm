<script>
    import "../styles/styles.css";
    export let label = "Dropdown";
    export let content =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quisquam.";
    export let isOpen = false;
    export function handleClick() {
        alert("click!");
        isOpen = !isOpen;
    }
</script>

<div>
    <div onclick={handleClick} class="cursor-pointer">
        <button>{label}</button>
        <i
            class="fa-solid fa-chevron-right"
            data-fa-transform={isOpen ? "rotate-90" : ""}
        />
    </div>
    <div class={isOpen ? "flex" : "hidden"}>
        <p>{content}</p>
    </div>
</div>
