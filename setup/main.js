
define(['base/js/namespace', 'base/js/events'], function (Jupyter, events) {
  // Template cells including markdown and imports
  var setUp = function () {
Jupyter.notebook.insert_cell_at_index('markdown', 0).set_text(`# Title`)
Jupyter.notebook.insert_cell_at_index('markdown', 1).set_text(`# Description`)
Jupyter.notebook.insert_cell_at_index('code', 2).set_text(``)
Jupyter.notebook.insert_cell_at_index('markdown', 3).set_text(`# Environment`)
Jupyter.notebook.insert_cell_at_index('markdown', 4).set_text(`## Library Imports`)
Jupyter.notebook.insert_cell_at_index('code', 5).set_text(`import pandas as pd
import numpy as np
from pathlib import Path
from datetime import datetime
import re
import json`)
Jupyter.notebook.insert_cell_at_index('markdown', 6).set_text(`## Local Imports`)
Jupyter.notebook.insert_cell_at_index('code', 7).set_text(`# import xutilities
# from xutilities import flatten`)
Jupyter.notebook.insert_cell_at_index('markdown', 8).set_text(`## File Paths`)
Jupyter.notebook.insert_cell_at_index('code', 9).set_text(`# https://medium.com/@rrfd/cookiecutter-data-science-organize-your-projects-atom-and-jupyter-2be7862f487e
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

# Credentials`)
Jupyter.notebook.insert_cell_at_index('markdown', 10).set_text(`## Constants and Globals`)
Jupyter.notebook.insert_cell_at_index('code', 11).set_text(`# Constants and Globals
XVERSION = 1`)
Jupyter.notebook.insert_cell_at_index('markdown', 12).set_text(`# Code`)
Jupyter.notebook.insert_cell_at_index('code', 13).set_text(`def my_version():
    return XVERSION`)
Jupyter.notebook.insert_cell_at_index('markdown', 14).set_text(`# Unit Tests`)
Jupyter.notebook.insert_cell_at_index('code', 15).set_text(`import unittest
        
class Test_My_Code(unittest.TestCase):

    def test_version(self):
        self.assertTrue(my_version() == 1)`)
Jupyter.notebook.insert_cell_at_index('markdown', 16).set_text(`## Initialization`)
Jupyter.notebook.insert_cell_at_index('code', 17).set_text(`# Initializations
aversion = my_version()`)
Jupyter.notebook.insert_cell_at_index('markdown', 18).set_text(`# Main`)
Jupyter.notebook.insert_cell_at_index('code', 19).set_text(`if __name__ == '__main__':
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
    
    print('Done')`)
Jupyter.notebook.insert_cell_at_index('code', 20).set_text(``)

    // Run all cells
    Jupyter.notebook.execute_all_cells()
  }
  // Prompts user to enter name for notebook
  var promptName = function () {
    // Open rename notebook box if 'Untitled' in name
    // if (Jupyter.notebook.notebook_name.search('Untitled') != -1) {
    //  document.getElementsByClassName('filename')[0].click()
    // }
  }
  // Run on start
  function load_ipython_extension () {
    // Add default cells for new notebook
    if (Jupyter.notebook.get_cells().length === 1) {
      setTimeout(setUp, 500)
    } else {
      promptName()
    }
  }
  // Run when cell is executed
  events.on('execute.CodeCell', function () {
    promptName()
  })
  // Run when notebook is saved
  events.on('before_save.Notebook', function () {
    promptName()
  })
  return {
    load_ipython_extension: load_ipython_extension
  }
})

