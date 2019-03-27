#!/usr/bin/env python
# coding: utf-8

# # Title

# # Description

# In[ ]:





# # Environment

# ## Library Imports

# In[12]:


import pandas as pd
import numpy as np
from pathlib import Path
from datetime import datetime
import re
import json


# ## Local Imports

# In[4]:


# import xutilities
# from xutilities import flatten


# ## File Paths

# In[5]:


# https://medium.com/@rrfd/cookiecutter-data-science-organize-your-projects-atom-and-jupyter-2be7862f487e
# Base Paths
base_path = Path.cwd()

# Data paths
data_path = base_path / 'data'
raw_data_path = data_path / 'raw'
interim_data_path = data_path / 'interim'
processed_data_path = data_path / 'processed'
external_data_path = data_path / 'external'

# Reports paths
reports_path = base_path / 'reports'
figures_path = reports_path / 'figures'

# Input paths

# Outputs paths

# Credentials


# ## Constants and Globals

# In[6]:


# Constants and Globals
XVERSION = 1


# # Code

# In[7]:


def my_version():
    return XVERSION


# # Unit Tests

# In[9]:


import unittest
        
class Test_My_Code(unittest.TestCase):

    def test_version(self):
        self.assertTrue(my_version() == 1)


# ## Initialization

# In[10]:


# Initializations
aversion = my_version()


# # Main

# In[11]:


if __name__ == '__main__':
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
    
    print('Done')


# In[ ]:




