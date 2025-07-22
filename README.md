# StackDot - Node.js Backend Task

<!--  -->
### Database Schema

#### 1. Institute (DB Table)
    - name 
    - type
    - location 
    - schoolDetails (type - schoolDetailsSchema)
    - competitiveExamDetails: (type - competitiveExamSchema)
    - playHouseDetails: (type - playHouseSchema)
    - collegeDetails: (type - collegeSchmema)
  
#### 2. schoolDetailSchema
    - board
    - medium
    - standard
    - subjects
  
#### 3. competitiveExamSchema
    - examType
  
#### 4. playHouseSchema
    - ageGroups

#### 5. collegeSchmema
    - departments
    - courses


### API EndPoints:

#### 1. POST /api/institute/create -  create Institute

#### 2. GET /api/institute/:id -  get all Institute