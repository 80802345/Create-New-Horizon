ServerEvents.recipes(event=>{
    let ctnh = event.recipes.gtceu
    ctnh.large_chemical_reactor('sodium_iodate')
    .itemInputs('18x gtceu:sodium_hydroxide_dust')
    .itemInputs('2x gtceu:sodium_iodide_dust')
    .inputFluids(Fluid.of('gtceu:blue_vitriol_solution',3000))
    .inputFluids(Fluid.of('gtceu:sulfur_trioxide',3000))
    .itemOutputs('5x gtceu:sodium_iodate_dust')
    .itemOutputs('3x gtceu:copper_dust')
    .itemOutputs('3x gtceu:sodium_dust')
    .outputFluids(Fluid.of('gtceu:sodium_sulfate_solution',3000))
    .outputFluids(Fluid.of('minecraft:water',6000))
    .outputFluids(Fluid.of('gtceu:sulfur_dioxide',3000))
    .EUt(1920)
    .duration(290)
})