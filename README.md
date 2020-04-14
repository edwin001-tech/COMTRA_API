# COMTRA_API
RESTAPI's,Express and Mysql
COMTRA API DOCS

Endpoints

api/ users
api/ categories
api/ categories/<int:pk>
api/ products
api/ products/<int:pk>
api/ services
api/ services/<int:pk>
api/ feedback
api/ token/ [name='token_obtain_pair']
api/ token/refresh/ [name='token_refresh']
api/users
Http methods : GET, POST
This lists all the users and this is the route responsible for creating new users

api/categories
Http methods : GET, POST
Lists all categories and enables creation of a new category

api/categories/<id>
Http methods : GET, PUT, DELETE
Retrieves a category by id

api/products
Http methods : GET,POST
Lists all products and allows creation of a new product
api/products/id
Http methods : GET, PUT, DELETE
Retrieves a specific product by id, enables modification and deletion

api/services
Http methods : GET, POST
Lists all services and allows creation of a new service


api/services/id
Http methods : GET, PUT, DELETE
Retrieval of a service by id and modification with deletion capabilities

