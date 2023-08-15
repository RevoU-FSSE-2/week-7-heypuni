async function runDice() {
    try {
        const result = await takeMyDice();
    } catch (error) {
        console.log(error)
    }
}