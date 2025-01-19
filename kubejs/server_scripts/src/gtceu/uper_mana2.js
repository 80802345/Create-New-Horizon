ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("twist_mana_close")
        .itemInputs('32x gtceu:twist_power_mana_dust')
        .itemInputs('2x gtceu:double_naquadah_plate')
        .itemInputs('16x gtceu:tungsten_carbide_foil')
        .itemOutputs('kubejs:encapsulated_twist_mana')
        //.inputFluids(Fluid.of("bloodmagic:life_essence_fluid", 4000))
        .duration(1200)
        .EUt(12222)

    event.recipes.gtceu.implosion_compressor("ultra_mana")
        .itemInputs('kubejs:encapsulated_twist_mana')
        .itemInputs('8x gtceu:industrial_tnt')
        .itemOutputs('24x gtceu:ultra_mana_dust')
        .itemOutputs('8x gtceu:mana_remain_dust')
        .duration(10000)
        .EUt(30)
    event.recipes.gtceu.centrifuge('mana_recycle')
        .itemInputs('2x gtceu:mana_remain_dust')
        .chancedOutput('gtceu:mana_fused_dust', 6000, 500)
        .chancedOutput('gtceu:mana_plus_dust', 3000, 500)
        .chancedOutput('2x gtceu:small_mana_super_plus_dust', 1000, 500)
        .outputFluids(Fluid.of("gtceu:mana", 750))
        .duration(100)
        .EUt(960)
    event.recipes.gtceu.mixer("mana_radiation_mixture")
        .itemInputs('3x gtceu:thorium_dust')
        .itemInputs('3x gtceu:uranium_235_dust')
        .itemInputs('3x gtceu:plutonium_241_dust')
        .itemInputs('3x gtceu:naquadah_dust')
        .inputFluids(Fluid.of('gtceu:zenith_essence', 300))
        .notConsumable('kubejs:terria_catalyst')
        .inputFluids(Fluid.of('gtceu:radon', 800))
        .outputFluids(Fluid.of("gtceu:mana_radiation_mixture", 2880))
        .EUt(12222)
        .duration(400)
    event.recipes.gtceu.twisted_fusion('mana_fused')
        .inputFluids(Fluid.of('gtceu:mana_radiation_mixture', 32))
        .inputFluids(Fluid.of('gtceu:mana_super_plus', 32))
        .outputFluids(Fluid.of("gtceu:twist_power_mana", 72))
        .EUt(30720)
        .duration(16);
    event.recipes.gtceu.mana_reactor('mana_stable_cooldown')
        .inputFluids(Fluid.of('gtceu:pcb_coolant', 1000))
        .inputFluids(Fluid.of('gtceu:elf_fuel', 1000))
        .inputFluids(Fluid.of('gtceu:cryotheum', 1000))
        .itemInputs('mythicbotany:niflheim_rune')
        .outputFluids(Fluid.of('gtceu:mana_stable_cooldown', 3000))
        .EUt(960)
        .duration(2000);
    event.recipes.gtceu.mana_reactor('mana_stable_plus_dust')
        .itemInputs('10x gtceu:mana_infused_plus_dust')
        .inputFluids(Fluid.of('gtceu:mana_stable_cooldown', 800))
        .itemOutputs('12x gtceu:mana_stable_plus_dust')
        .EUt(1440)
        .duration(200);
    event.recipes.gtceu.mana_reactor('mana_zenith_plus_dust')
        .itemInputs('8x gtceu:mana_stable_plus_dust')
        .inputFluids(Fluid.of('gtceu:zenith_essence', 200))
        .itemOutputs('6x gtceu:mana_super_plus_dust')
        .EUt(7680)
        .duration(200);
    event.recipes.gtceu.mana_seperator('ma_mixed1')
        .itemInputs('20x gtceu:mana_fused_dust')
        .notConsumable('kubejs:elf_catalyst')
        .itemOutputs('16x gtceu:mana_fused_mixed_dust')
        .itemOutputs('4x gtceu:elementium_dust')
        .itemOutputs('4x gtceu:mana_steel_dust')
        .itemOutputs('2x botania:dragonstone')
        .outputFluids(Fluid.of("gtceu:mana", 1000))
        .duration(800)
        .EUt(480)
    event.recipes.gtceu.chemical_bath('ma_mixed2')
        .itemInputs('4x gtceu:mana_fused_mixed_dust')
        .inputFluids(Fluid.of("bloodmagic:life_essence_fluid", 10000))
        .itemOutputs('3x gtceu:mana_fused_lp_mixed_dust')
        .duration(200)
        .EUt(666)
    event.recipes.gtceu.hellforge('ma_mixed3')
        .itemInputs('16x gtceu:mana_fused_lp_mixed_dust')
        .notConsumable('bloodmagic:etherealslate')
        .itemOutputs('12x gtceu:mana_fused_demon_mixed_dust')
        .addDataNumber('minimumDrain', 2000)
        .addDataNumber('drain', 400)
        .duration(200)
        .EUt(666)
    event.recipes.gtceu.mana_reactor('ma_plus')
        .itemInputs('10x gtceu:mana_fused_demon_mixed_dust')
        .inputFluids(Fluid.of(Fluid.of("gtceu:mana"), 10000))
        .itemOutputs('8x gtceu:mana_plus_dust')
        .duration(100)
        .EUt(1000)
    event.recipes.gtceu.chemical_reactor('gtceu:elf_fuel')
        .inputFluids(Fluid.of("gtceu:mana", 5000))
        .inputFluids(Fluid.of("gtceu:carbon_dioxide", 2000))
        .inputFluids(Fluid.of("gtceu:argon", 1000))
        .outputFluids(Fluid.of("gtceu:elf_fuel", 5000))
        .duration(500)
        .EUt(760)
    event.recipes.gtceu.greenhouse('tree_turn_big')
        .circuit(20)
        .itemInputs('64x twilightforest:twilight_oak_sapling')
        .itemInputs('64x gtceu:fertilizer')
        .inputFluids(Fluid.of("minecraft:water", 10000))
        .itemOutputs('twilightforest:hollow_oak_sapling')
        .duration(6400)
        .EUt(120)

    event.recipes.gtceu.mark_of_falling_tower('mana_fused_dust')
        .itemInputs('9x gtceu:mana_plus_block')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 192000))
        .itemOutputs('1280x gtceu:livingrock_mana_fused_ore', )
        .addData('radius', 6)
        .addData('rock', 'botania:livingrock')
        .EUt(1920)
        .duration(400);
    event.recipes.gtceu.mana_seperator('platinum_catalyst2')
        .itemInputs('30x gtceu:platinum_metal_dust')
        .inputFluids(Fluid.of("gtceu:sulfuric_acid", 500))
        .notConsumable('kubejs:terria_catalyst')
        .itemOutputs('10x gtceu:palladium_dust')
        .itemOutputs('12x gtceu:platinum_dust')
        .itemOutputs('9x gtceu:ruthenium_dust')
        .itemOutputs('3x gtceu:rhodium_dust')
        .itemOutputs('4x gtceu:osmium_dust')
        .itemOutputs('3x gtceu:iridium_dust')
        .EUt(30720)
        .duration(1000)
        .circuit(2);
    event.shaped(
        Item.of('ctnhcore:season_reactor', 1), [
            "ACA",
            "DBE",
            "AFA"
        ], {
            A: 'gtceu:mana_steel_gear',
            B: 'botania:mana_pylon',
            C: 'botania:rune_spring',
            D: 'botania:rune_summer',
            E: 'botania:rune_autumn',
            F: 'botania:rune_winter',
        })
    event.recipes.gtceu.hellforge("stable")
        .itemInputs('8x kubejs:force_field_casing')
        .itemInputs('8x gtceu:tungsten_steel_gear')
        .itemInputs('kubejs:endslate')
        .itemOutputs('4x ctnhcore:depth_force_field_stabilizing_casing')
        .addDataNumber('minimumDrain', 2000)
        .addDataNumber('drain', 1000)
        .EUt(10000)
        .duration(600)
    event.recipes.gtceu.gaia_reactor("mana_produce_1")
        .itemInputs('gtceu:mana_super_plus_block')
        .inputFluids(Fluid.of('gtceu:mana', 14400))
        .itemOutputs('64x gtceu:mana_plus_ingot')
        .EUt(12222)
        .duration(1200)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune')
        .circuit(20)
        .itemInputs('16x gtnn:radioactive_waste')
        .itemInputs('botania:overgrowth_seed')
        .itemInputs('64x gtceu:fertilizer')
        .itemInputs('64x gtceu:fertilizer')
        .inputFluids(Fluid.of("minecraft:water", 10000))
        .itemOutputs('ctnhcore:proliferation_rune')
        .duration(20000)
        .EUt(12222)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_1')
        .circuit(0)
        .itemInputs('ctnhcore:proliferation_rune')
        .inputFluids(Fluid.of("minecraft:water", 10000))
        .itemOutputs('ctnhcore:proliferation_rune')

    .chancedOutput('ctnhcore:proliferation_rune', 5000, 2500)
        .duration(20000)
        .EUt(12222)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_2')
        .circuit(1)
        .itemInputs('ctnhcore:proliferation_rune')
        .itemInputs('64x gtceu:fertilizer')
        .inputFluids(Fluid.of("minecraft:water", 10000))
        .itemOutputs('ctnhcore:proliferation_rune')
        .chancedOutput('ctnhcore:proliferation_rune', 9000, 2500)
        .duration(16000)
        .EUt(12222)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_3')
        .circuit(2)
        .itemInputs('ctnhcore:proliferation_rune')
        .itemInputs('64x gtceu:fertilizer')
        .itemInputs('64x gtceu:fertilizer')
        .inputFluids(Fluid.of("minecraft:water", 10000))
        .itemOutputs('ctnhcore:proliferation_rune')
        .chancedOutput('ctnhcore:proliferation_rune', 9900, 100)
        .chancedOutput('ctnhcore:proliferation_rune', 1000, 1500)
        .duration(8000)
        .EUt(12222)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_4')
        .circuit(3)
        .itemInputs('ctnhcore:proliferation_rune')
        .itemInputs('16x gtceu:fertilizer')
        .itemInputs('64x gtnn:radioactive_waste')
        .inputFluids(Fluid.of("minecraft:water", 10000))
        .itemOutputs('3x ctnhcore:proliferation_rune')
        .chancedOutput('ctnhcore:proliferation_rune', 9900, 100)
        .chancedOutput('2x ctnhcore:proliferation_rune', 7500, 1500)
        .duration(1000)
        .EUt(24444)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_zenith')
        .circuit(0)
        .itemInputs('ctnhcore:proliferation_rune')
        .itemInputs('ctnhcore:horizen_rune')
        .inputFluids(Fluid.of('gtceu:zenith_essence', 500))
        .itemOutputs('4x ctnhcore:horizen_rune')
        .duration(200)
        .EUt(12222)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_twist')
        .circuit(0)
        .itemInputs('ctnhcore:proliferation_rune')
        .itemInputs('ctnhcore:twist_rune')
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 2500))
        .itemOutputs('4x ctnhcore:twist_rune')
        .duration(200)
        .EUt(12222)
    event.recipes.gtceu.greenhouse('ctnhcore:proliferation_rune_starlight')
        .circuit(0)
        .itemInputs('ctnhcore:proliferation_rune')
        .itemInputs('ctnhcore:starlight_rune')
        .inputFluids(Fluid.of('gtceu:nether_essence_crystal_fluid', 2500))
        .itemOutputs('4x ctnhcore:starlight_rune')
        .duration(200)
        .EUt(12222)
    event.recipes.gtceu.assembler("QUASAR_CASING")
        .itemInputs('2x ctnhcore:naquadah_casing_block')
        .itemInputs('4x gtceu:ultra_mana_plate')
        .itemInputs('3x gtceu:neutron_reflector')
        .itemInputs('4x ctnhcore:depth_force_field_stabilizing_casing')
        .itemOutputs('4x ctnhcore:quasar_energy_stabilization_casing')
        //.inputFluids(Fluid.of("bloodmagic:life_essence_fluid", 4000))
        .duration(400)
        .EUt(33333)
    event.recipes.gtceu.assembler("QUASAR_COIL")
        .itemInputs('4x gtceu:naquadah_coil_block')
        .itemInputs('2x gtceu:superconducting_coil')
        .itemInputs('8x gtceu:ultra_mana_double_wire')
        .itemInputs('8x gtceu:neutron_reflector')
        .itemOutputs('8x ctnhcore:ulta_mana_coil_block')
        //.inputFluids(Fluid.of("bloodmagic:life_essence_fluid", 4000))
        .duration(400)
        .EUt(33333)
    event.recipes.gtceu.assembly_line("QUASAR")
        .itemInputs('16x ctnhcore:quasar_energy_stabilization_casing')
        .itemInputs('64x gtceu:ultra_mana_octal_wire')
        .itemInputs('64x gtceu:ultra_mana_frame')
        .itemInputs('16x gtceu:mana_plus_gear')
        .itemInputs('16x gtceu:mana_super_plus_gear')
        .itemInputs('8x ctnhcore:ulta_mana_coil_block')
        .itemInputs('64x gtceu:alfsteel_screw')
        .itemInputs('4x bloodmagic:chargingrune2')
        .itemInputs('8x ctnhcore:starlight_rune')
        .itemInputs('8x ctnhcore:twist_rune')
        .itemInputs('4x ctnhcore:horizen_rune')
        .itemInputs('ctnhcore:quasar_rune')
        .inputFluids(Fluid.of('gtceu:zenith_essence', 14400))
        .inputFluids(Fluid.of('gtceu:mana_radiation_mixture', 144000))
        .inputFluids(Fluid.of('bloodmagic:life_essence_fluid', 144000))
        .inputFluids(Fluid.of('gtceu:enriched_naquadah', 1440))
        .itemOutputs('ctnhcore:eye_of_quasar')
        .stationResearch(b => b.researchStack(Item.of('ctnhcore:mana_generator_turbine_tier4'))
            .dataStack(Item.of("gtceu:data_orb"))
            .EUt(GTValues.VA[GTValues.ZPM])
            .CWUt(32))
        //.inputFluids(Fluid.of("bloodmagic:life_essence_fluid", 4000))
        .duration(800)
        .EUt(66666)

})