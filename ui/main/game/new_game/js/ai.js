
function ai_types() {

    /* 
    {
        percent_land [0 1],
        percent_air [0 1],
        percent_naval [0 1],

        metal_drain_check [0 1],
        energy_drain_check [0 1],
        metal_demand_check [0 1],
        energy_demand_check [0 1],

        micro_type 0:none | 1:platoon | 2:squad,

        go_for_the_kill: true | false,
        priority_scout_metal_spots: true | false,
        neural_data_mod: [0 ... )

        economy_scale: [0 ... )
    } 
    */

    var vanilla_types = {
        'Normal': {
            percent_land: 0.65,
            percent_air: 0.25,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 1.13,
            energy_drain_check: 1.25,
            metal_demand_check: 1.33,
            energy_demand_check: 1.40,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: false,
            neural_data_mod: 1.3
        },        
        'Hard': {
            percent_land: 0.65,
            percent_air: 0.25,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.93,
            energy_drain_check: 1.05,
            metal_demand_check: 1.13,
            energy_demand_check: 1.20,
            micro_type: 0,
            go_for_the_kill: false,
            priority_scout_metal_spots: true,
            neural_data_mod: 1.2
        },        
        'Relentless': {
            percent_land: 0.65,
            percent_air: 0.25,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.73,
            energy_drain_check: 0.85,
            metal_demand_check: 0.93,
            energy_demand_check: 1.0,
            micro_type: 1,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            neural_data_mod: 1.1
        },        
        'Absurd': {
            percent_land: 0.65,
            percent_air: 0.25,
            percent_naval: 0.05,
            percent_orbital: 0.05,
            metal_drain_check: 0.53,
            energy_drain_check: 0.65,
            metal_demand_check: 0.73,
            energy_demand_check: 0.8,
            micro_type: 2,
            go_for_the_kill: true,
            priority_scout_metal_spots: true,
            neural_data_mod: 1.0
        },
    };

    var Redenbacher_AIs = {};
    var theName = "";
    var settings;

     for (var i in vanilla_types) {
      //clone
      settings = JSON.parse(JSON.stringify(vanilla_types[i]));
  
      // add Redenbacher version
      theName = i + " (Redenbacher)";      
      settings["metal_drain_check"] =  settings["metal_drain_check"] * .35 ; //.26;
      settings["metal_demand_check"] =  settings["metal_demand_check"] * .42; //.33;
      settings["energy_drain_check"] = settings["energy_drain_check"] * 0.25;  //.26;
      settings["energy_demand_check"] = settings["energy_demand_check"] * 0.30 //.33;
      Redenbacher_AIs[theName] = settings;
    }

    for (var i in vanilla_types) {      
      // keep the original if user forgets to turn mod off.
      Redenbacher_AIs[i] = vanilla_types[i];
    }
    
    return Redenbacher_AIs;
}