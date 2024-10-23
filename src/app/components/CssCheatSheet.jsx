function CssCheatSheet({ selectedTool, datas }) {
    return (
        <div className={`${selectedTool === 1 ? "" : "hidden"} p-8`}>
            <h2>CSS Cheat Sheet</h2>
        </div>
    )
}

export default CssCheatSheet
