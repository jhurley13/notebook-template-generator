# Create a template for your Jupyter Notebooks
## Quick starts for your data science investigations

In a nicely written 
article _Set Your Jupyter Notebook up Right with this Extension_
[[1]](https://towardsdatascience.com/set-your-jupyter-notebook-up-right-with-this-extension-24921838a332), 
William Koerhsen describes how to use Jupyter notebook extensions to 
improve productivity by creating a notebook template. This template serves as the starting point for 
each of your data science journeys. We have all found ourselves typing the same boilerplate code 
at the start of a new investigation.

The essence of 
[[1]](https://towardsdatascience.com/set-your-jupyter-notebook-up-right-with-this-extension-24921838a332)
 is that you can put a Javascript file into a particular folder used by Jupyter's
 nbextensions 
system, and it will be called by Jupyter each time a new notebook is created. In his article, he creates 
a new notebook with some basic, common Python boilerplate, and also enables a hook that forces you to
rename the notebook from the default "Untitled.ipynb". He has a companion article,  
_Jupyter Notebook Extensions_
[[2]](https://towardsdatascience.com/jupyter-notebook-extensions-517fa69d2231)
that shows how to install Jupyter notebook extensions.

There is another interesting article at DrivenData.org, 
_Cookiecutter Data Science_
[[3]](http://drivendata.github.io/cookiecutter-data-science/) 
that details a helpful organization for Data Science projects. 

In my particular case, the notebook template that I use expands on both 
[[1]](https://towardsdatascience.com/set-your-jupyter-notebook-up-right-with-this-extension-24921838a332)
and 
[[3]](http://drivendata.github.io/cookiecutter-data-science/). 
It adds in some code
that I know I should include but am often too lazy to add in to a one-off notebook (I'm talking about you,
unittest!) Too many times I 
have started a project that I thought I would only use once, but ended up using multiple times, or expanded
the project beyond what I initially envisioned. To avoid an unruly mess, it helps me to have some
common structure that I can fill in as needed.

Although all the hard work of figuring out notebook extensions and reverse engineering Jupyter startup
 code has been done by W Koehrsen, manually editing the Javascript file to add each cell in the template is somewhat tedious.
For any template notebook more than a few lines, there is a good chance of introducing a syntax error
into the javascript file.

This article (and the code in the corresponding github repository) simplifies this process
 by (semi-)automatically generating the main.js file from a template Jupyter notebook. It is only semi-automatic as
 you must manually save your template as a .py file before running the code in _notebook-template-generator.ipynb_ 
 with Jupyter.

# Prerequisites
If you don’t yet have Jupyter Extensions, check out this article:
[[2]](https://towardsdatascience.com/jupyter-notebook-extensions-517fa69d2231)
 or just run the following 
code in a command prompt:   
      ```pip install jupyter_contrib_nbextensions && jupyter contrib nbextensions install --user```  
and then start a new notebook server and navigate to the extensions tab). Having worked in the security
space for a long time, I don't run as an administrator on my machine, so adding '--user' is necessary, at least in my case.

You will need to grab a copy of the "setup" folder from the GitHub repository referenced in 
[[1]](https://towardsdatascience.com/set-your-jupyter-notebook-up-right-with-this-extension-24921838a332),
which is [here](https://github.com/WillKoehrsen/Data-Analysis/tree/master/setup). You can find the path where the setup directory needs to go by running the notebook-template-generator notebook; if the 
path does not exist it will show the path where it expects it.

# Running

Open both notebook-template.ipynb and notebook-setup-generator.ipynb with Jupyter. Edit notebook-template.ipynb
to contain whatever you would like in a basic Jupyter notebook. Under the File menu, choose "Download as..." and pick 
"Python (.py)". On macOS, this will be saved as notebook-template.py.html in the ~/Downloads directory.

# Additional Notes

I have tested this on macOS 10.14.3 with Python 3.7.2 in a virtual environment. The parser in _generate_setup_javascript()_
is very basic, so it's possible that complicated notebook-template.ipynb files will not be parsed correctly.

# Tags
Jupyter Notebook, Productivity, Towards Data Science

# References

[1] W. Koehrsen, _Set Your Jupyter Notebook up Right with this Extension_, (2019), 
https://towardsdatascience.com/set-your-jupyter-notebook-up-right-with-this-extension-24921838a332  

[2] W. Koehrsen, _Jupyter Notebook Extensions_, (2018), https://towardsdatascience.com/jupyter-notebook-extensions-517fa69d2231  

[3] DrivenData.org, _Cookiecutter Data Science_, http://drivendata.github.io/cookiecutter-data-science/

[4] W. Koehrsen, 
_How to Automatically Import Your Favorite Libraries into IPython or a Jupyter Notebook_
, https://towardsdatascience.com/how-to-automatically-import-your-favorite-libraries-into-ipython-or-a-jupyter-notebook-9c69d89aa343

[5] Chris Moffitt, 
_Building a Repeatable Data Analysis Process with Jupyter Notebooks_ (2018),
https://pbpython.com/notebook-process.html