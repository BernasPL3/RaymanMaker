export function saveLevel(levelData) {

    const data =
        JSON.stringify(levelData);

    localStorage.setItem(
        "raymanmaker_level",
        data
    );
}

export function loadLevel() {

    return JSON.parse(
        localStorage.getItem(
            "raymanmaker_level"
        )
    );
}
