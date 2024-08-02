
# data_cleaning.py
import pandas as pd
import numpy as np
from exceptions import DataCleaningError

def load_dataset(file_path):
    try:
        df = pd.read_csv(file_path)
        return df
    except FileNotFoundError:
        raise DataCleaningError(f"File '{file_path}' not found.")

def clean_dataset(df):
    df = df.fillna(0)  # Example: Fill missing values with 0
    
    df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d')
    
    return df

# file_handling.py
import pandas as pd
from exceptions import DataCleaningError

def save_cleaned_data(df, file_path):
    try:
        df.to_csv(file_path, index=False)
    except Exception as e:
        raise DataCleaningError(f"Error saving data to '{file_path}': {str(e)}")

def load_cleaned_data(file_path):
    try:
        df = pd.read_csv(file_path)
        return df
    except FileNotFoundError:
        raise DataCleaningError(f"File '{file_path}' not found.")
    except Exception as e:
        raise DataCleaningError(f"Error loading data from '{file_path}': {str(e)}")

# exceptions.py
class DataCleaningError(Exception):
    pass


import pandas as pd
from data_cleaning import clean_dataset, load_dataset
from file_handling import save_cleaned_data, load_cleaned_data
from exceptions import DataCleaningError

def basic_analysis(df):
    total_confirmed = df['Confirmed'].sum()
    total_deaths = df['Deaths'].sum()
    total_recovered = df['Recovered'].sum()
    
    highest_cases = df.loc[df['Confirmed'].idxmax()]
    lowest_cases = df.loc[df['Confirmed'].idxmin()]
    
    return total_confirmed, total_deaths, total_recovered, highest_cases, lowest_cases

def main():
    try:
       
        file_path = 'covid_data.csv'
        df = load_dataset(file_path)
        
        df = clean_dataset(df)
        
        clean_data_file = 'clean_covid_data.csv'
        save_cleaned_data(df, clean_data_file)
        
        df_cleaned = load_cleaned_data(clean_data_file)
        
        
        total_confirmed, total_deaths, total_recovered, highest_cases, lowest_cases = basic_analysis(df_cleaned)
        
        
        print(f"Total confirmed cases: {total_confirmed}")
        print(f"Total deaths: {total_deaths}")
        print(f"Total recovered: {total_recovered}")
        print(f"Highest cases:\n{highest_cases}")
        print(f"Lowest cases:\n{lowest_cases}")
        
    except DataCleaningError as e:
        print(f"Error during data cleaning: {str(e)}")
    except Exception as e:
        print(f"Unexpected error: {str(e)}")

if __name__ == "__main__":
    main()
