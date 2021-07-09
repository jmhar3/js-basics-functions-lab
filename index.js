const hq = 42
function distanceFromHqInBlocks(dist) {
    return Math.abs(hq - dist)
}

const feet = 264
function distanceFromHqInFeet(dist) {
    return distanceFromHqInBlocks(dist) * feet
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * feet
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet (start, end)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25
    }
    else {
        return ("cannot travel that far")
    }
}