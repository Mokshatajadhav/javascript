import pandas as pd
from file_handling import loading_from_csv

df = loading_from_csv('clean_covid_data.csv')

def analysis(df):
    total_confirmed = df['Confirmed'].sum()
    total_confirmed, total_deaths, total_recovered, most_cases_country, least_cases_country = analysis(df)
    print(f"Total Confirmed: {total_confirmed}")

    total_deaths = df['Deaths'].sum()
    print(f"Total Deaths: {total_deaths}")

    total_recovered = df['Recovered'].sum()
    print(f"Total Recovered: {total_recovered}")
    
    most_cases_country = df.groupby('Country/Region')['Confirmed'].sum().idxmax()
    print(f"Country with Most Cases: {most_cases_country}")
    
    least_cases_country = df.groupby('Country/Region')['Confirmed'].sum().idxmin()
    print(f"Country with Least Cases: {least_cases_country}")
    
    return total_confirmed, total_deaths, total_recovered, most_cases_country, least_cases_country

