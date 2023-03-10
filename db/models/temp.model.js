class Temp {
  
    constructor({ client, machineid, celsius, timestamp }) {
      this.client = client;
      this.machineid = machineid;
      this.celsius = celsius;
      this.timestamp = timestamp
    }
  
    key() {
      return {
        PK: `CLIENT#${this.client}`,
        SK: `MACHINEID#${this.machineid}#TIMESTAMP#${this.timestamp}`,
      };
    }
  
    toItem() {
      return {
        ...this.key(),
        Type: "Temp",
        Celsius: this.celsius,
        Timestamp:this.timestamp
      };
    }
}

  
  module.exports = { Temp };