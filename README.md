# Raspberry Pi Service

  ## Description
  Nodejs Examples to interact with Dynamodb and S3

  ## Pi Devices
  ```
  DHT 11 or 22 Temp Sensor

  | Sensor Pin   | PI  Pin  |
  |--------------|----------|
  |      -       | Ground   |
  |      +       | 5V       |
  |     out      | GPIO 4   |

  PI camera module
  ```
  ## AWS Services
  ```
  DynamoDB Table
    Primary Key Name = PK [note: not Pk, not pK, not pk, but PK]
    Sort Key Name = SK [note: reverse engineer line above]

  S3 Bucket

  note you can use my bucket and table name already in .env file
  ```
  ## Basic Application Path
  ```
  app.js -> api/ router.js <-> controller.js <-> service.js
                                   || 
                                   \/
                              /db /controllers(models)  <-> /services ...
  ```

## Endpoints
/
```json
  landing page
```

/health
  ```json
  {
    "uptime": 990.160930002,
    "message": "Ok",
    "timestamp": 1646572392333
  }
  ```
/temp
  ```json
  {
    "temp": "17.00",
    "timestamp": "1677439620257",
    "machineID": "02"
  }
```
/image
  ```json
  {
    "output": "/home/pi/server/public/images/1646572466933.jpg",
    "timestamp": 1677439673512,
    "machineID": "02",
    "Location":	"https://prichardson-pi-training.s3.amazonaws.com/prichardson/1677490263238.jpg",
    "key":	"prichardson/1677490263238.jpg",
    "Bucket":	"prichardson-pi-training"
  }
  ```

### Update AWS Credentials On Pi
```bash
sudo nano ~/.aws/credentials
```

### Clone Repo
``` shell
git clone https://github.com/prichardsondev/raspberrypi-aws-temp-camera.git
```

``` shell
cd raspberrypi-aws-temp-camera
```

``` shell
sudo mv .env.example .env
```

``` shell
sudo nano .env
```

- modify parameters
  - use prichardson-pi-training if you don't want to create S3 Bucket and DynamoDB Table


``` shell
npm i
```

``` shell
node app.js
```

  - browse to end points .../health, .../temp, .../image
  - check dynamo table and S3 bucket