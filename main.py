while True:
        print (input.rotation(Rotation.PITCH))
        if input.rotation(Rotation.PITCH) <1 or input.rotation(Rotation.PITCH) >1:
            light.set_all(light.rgb(255, 255, 255))