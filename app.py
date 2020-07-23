import numpy as np
import pandas as pd
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData, Table, Column, func
from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine('postgresql://postgres:JPH401@mc@localhost:5432/Names_DB')

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
Base.classes.keys()
# Save references to each table
yob = Base.classes.year_of_birth
state_name = Base.classes.state_names
#################################################
# Flask Setup Weather app
#################################################
app = Flask(__name__)
# Create our session (link) from Python to the DB
session = Session(engine)
# Design a query to retrieve data from nat_names Table in Names_DB

session.close()
#################################################
# Flask Routes
#################################################
@app.route("/")
def names():
    """List all available api routes."""
    return (f"Welcome to United States Name API<br/>"
            f"-----------------------------------------------<br/>"
            f"List of availible routes:<br/>"
            f"/api/v1.0/years<br/>"
            f"/api/v1.0/states<br/>")

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route("/api/v1.0/years")
def years():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    '''Return a list of all year_of_birth Data'''
    # Query all nat_names Data,

    results = (session.query(yob.year, yob.name, yob.sex, yob.count)
                      .order_by(yob.year)
                      .all())
    session.close()

    # Return the JSON representation of your dictionary
    year_data = []
    for results in results:
        year_dict = {"year": results.year,
                     "name": results.name,
                     "sex": results.sex,
                     "count": results.count}
        year_data.append(year_dict)
    #years_data = list(np.ravel(results))

    return jsonify(year_data)

if __name__ == '__main__':
    app.run(debug=True)
