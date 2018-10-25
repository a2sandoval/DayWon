const calcs = {
  increments(weight, weightCapacity = 2.5) {
    //incrementing for weights available. Divide actual weight by weight capacity, if the decimal place rounds up or down we determine the fixed weight for the user
    let fixedWeight = Math.round(weight / weightCapacity) * weightCapacity;
    return fixedWeight;
  },

  newTrainingMax(lift, repStandard, reps, trnMax) {
    if (lift == "bench" || lift == "military press") {
      return (trnMax = (reps - repStandard) * 2.5 + trnMax);
    }
  },

  trnMaxCalc(max) {
    let trnMax = max * 0.9;
    return trnMax;
  },

  oneRepMaxCalc(reps, weight) {
    let oneRepMax = reps * weight * 0.0333 + weight;
    return oneRepMax;
  },

  userCurrentMax(liftType) {
    switch (liftType) {
      case "Benchpress":
        return "bp";
      case "Squat":
        return "sqt";
      case "Deadlift":
        return "dl";
      case "Military Press":
        return "mp";
      default:
        break;
    }
  },

  weightPerc(weightPercInDec) {
    return weightPercInDec * 100;
  },

  totalWeight(weightPercInDec, userMax, weightCapacity = 2.5) {
    let weight = weightPercInDec * userMax;
    let trnMax = this.trnMaxCalc(weight);
    return this.increments(trnMax, weightCapacity);
  }
};

export default calcs;
