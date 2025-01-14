GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('cvd', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cvd_factory', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('cvd')
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAAAA", "AAABBBA", "AAABBBA")
            .aisle("AAAAAAA", "ACADDDA", "AAABBBA")
            .aisle("AAAAAAA", "A@ABBBA", "AAABBBA")
            .where("A", Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("B", Predicates.blocks("gtceu:laminated_glass"))
            .where("C", Predicates.blocks("gtceu:molybdenum_disilicide_coil_block"))
            .where("D", Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})               