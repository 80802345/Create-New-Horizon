GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('ultrasonication')
        .setEUIO("in")
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('ultrasonic_apparatus', 'multiblock').machine(holder => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('ultrasonication')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("##BCFCB##", "#BBCFCBB#", "##BCFCB##") 
            .aisle("#BBCFCBB#", "BDEEEEEDB", "#BBCFCBB#") 
            .aisle("##BCFCB##", "#BBC@CBB#", "##BCFCB##") 
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("gtceu:clean_machine_casing"))
            .where("C", Predicates.heatingCoils())
            .where("D", Predicates.blocks("gtceu:stainless_steel_gearbox"))
            .where("E", Predicates.blocks("gtceu:steel_pipe_casing"))
            .where("F",Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get()))) 
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})