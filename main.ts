while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < 1 || input.rotation(Rotation.Pitch) > 1) {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
