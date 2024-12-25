GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("inscriber", "simple")
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .definition((tier,builder) =>{
            builder.recipeType("inscriber", true, true)
            .tankScalingFunction(tier => tier * 4800)
            .workableTieredHullRenderer("gtceu:block/machines/inscriber")
        })
})
