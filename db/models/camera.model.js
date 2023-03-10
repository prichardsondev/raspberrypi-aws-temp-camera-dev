class Camera {
    constructor({ client, machineid, address, timestamp }) {
      this.client = client;
      this.machineid = machineid;
      this.address = address;
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
        Type: "Camera",
        Address: this.address,
        Timestamp:this.timestamp
      };
    }
  }

  module.exports = { Camera };