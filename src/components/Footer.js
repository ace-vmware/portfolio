import React, { Component } from 'react'
import pdf from '../media/resume.pdf'

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                id="footer-section"
                className="d-flex justify-content-center"
                >
                <button>
                    <a href="https://www.linkedin.com/in/adamevancho/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin mr-2"></i>LinkedIn
                    </a>
                </button>
                <button>
                    <a href="https://github.com/ace-vmware" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square mr-2"></i>Github
                    </a>
                </button>
                <button>
                    <a href={pdf} target="_blank" rel="noreferrer">
                        <i className="far fa-file mr-2"></i>Resume
                    </a>
                </button>
          </div>
        )
    }

}

export default Footer;