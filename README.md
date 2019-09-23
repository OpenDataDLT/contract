## ODPID Contract API Service


##### Install Dependencies
```
npm install
npm install -g truffle
```
##### Compile Contract
```
truffle complie
```
##### ENV Variables
```
const PORT = process.env.PORT || 3000;
const RPC_HOST = process.env.RPC_HOST || 'localhost';
const RPC_PROTOCOL = process.env.RPC_PROTOCOL || 'http';
const RPC_PORT = process.env.RPC_PORT || '5001';
```


##### Run Service

```
npm start
```

## Sample REST APIs Requests

### Get Public Account Address of peer

**GET**:

```
http://localhost:3000/api/getaccount
```

**OUTPUT:**

```
[
    "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
]
```

### Create New UUID

**POST**:

```
http://localhost:3000/api/create
```

**INPUT:**
```
{
	"type" : "europendataportal",
	"name" : "dataset 1"
}
```

**OUTPUT:**

```
{
    "transactionHash": "836a5623bda395e8b0790ef021777066530f151240337d6ba4df52fed8d9833b",
    "uuid": "ad263f24-85bc-4657-a070-a9d050bb3ae9",
    "Address": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

### get UUID

**GET**:

```
http://localhost:3000/api/uuid
```

**OUTPUT:**

```
{
    "uuid": "ad263f24-85bc-4657-a070-a9d050bb3ae9",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

**GET**:

```
http://localhost:3000/api/uuid?id=0
```

**OUTPUT:**

```
{
    "uuid": "ad263f24-85bc-4657-a070-a9d050bb3ae9",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```
**get the udid by id, id is count of the entry in contract count can get by count api**




**GET**:

**Not functioning (implementation done, route not exposed)**

```
http://localhost:3000/api/uuid?id=0&address=0x124a86df3d21419e94875ef3d2af4507578b4c9f
```

**OUTPUT:**

```
{
    "uuid": "ad263f24-85bc-4657-a070-a9d050bb3ae9",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```




### get TYPE

**GET**:

```
http://localhost:3000/api/type
```

**OUTPUT:**

```
{
    "type": "europendataportal",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

**GET**:

```
http://localhost:3000/api/uuid?id=1
```

**OUTPUT:**

```
{
    "type": "datagov",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```
**get the type by id, id is count of the entry in contract count can get by count api**




**GET**:

**Not functioning (implementation done, route not exposed)**
```
http://localhost:3000/api/uuid?id=1&address=0x124a86df3d21419e94875ef3d2af4507578b4c9f
```

**OUTPUT:**

```
{
    "type": "datagov",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```



### get DATASET

**GET**:

```
http://localhost:3000/api/dataset
```

**OUTPUT:**

```
{
    "name": "dataset 1",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

**GET**:

```
http://localhost:3000/api/dataset?id=1
```

**OUTPUT:**

```
{
    "name": "dataset testing",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```
**get the dataset by id, id is count of the entry in contract count can get by count api**


**GET**:

**Not functioning (implementation done, route not exposed)**


```
http://localhost:3000/api/dataset?id=1&address=0x124a86df3d21419e94875ef3d2af4507578b4c9f
```

**OUTPUT:**

```
{
    "name": "dataset testing",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

### get DETAILS

**GET**:

```
http://localhost:3000/api/details
```

**OUTPUT:**

```
{
    "response": [
        "ad263f24-85bc-4657-a070-a9d050bb3ae9",
        "europendataportal",
        "dataset 1"
    ],
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

**GET**:

```
http://localhost:3000/api/details?id=1
```

**OUTPUT:**

```
{
    "response": [
        "744c7553-2c6f-49e2-94d2-efb013d5b39c",
        "datagov",
        "dataset testing"
    ],
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```
**get the detail by id, id is count of the entry in contract count can get by count api**

**GET**:

**Not functioning (implementation done, route not exposed)**


```
http://localhost:3000/api/details?id=1&address=0x124a86df3d21419e94875ef3d2af4507578b4c9f
```

**OUTPUT:**

```
{
    "response": [
        "744c7553-2c6f-49e2-94d2-efb013d5b39c",
        "datagov",
        "dataset testing"
    ],
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```


### get COUNT

**GET**:

```
http://localhost:3000/api/count
```

**OUTPUT:**

```
{
    "count": "2",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```

**GET**:

**Not functioning (implementation done, route not exposed)**
```
http://localhost:3000/api/count?address=0x124a86df3d21419e94875ef3d2af4507578b4c9f
```

**OUTPUT:**

```
{
    "count": "2",
    "ownerAddress": "0x124a86df3d21419e94875ef3d2af4507578b4c9f"
}
```



**Har Preet Singh**

