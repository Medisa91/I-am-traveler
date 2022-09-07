import React, { useState } from "react";
import PlaneIcon from "../../assets/images/plane.png";
import CertificateYellowIcon from "../../assets/images/svg/verified-yellow.svg";
import CertificateGreenIcon from "../../assets/images/svg/verified-green.svg";
import PackageImg01 from "../../assets/images/package01.png";
import PackageImg02 from "../../assets/images/package02.png";
import PackageImg03 from "../../assets/images/package03.png";
import PackageImg04 from "../../assets/images/package04.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";

const AvailableCard = () => {
  const [showMoreDetail, setShowMoreDetail] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="card mb-3 request-card-wrapper">
      <div className="card-header bg-transparent">
        <div className="row">
          <div className="col-3 text-left header-card-depart-arriv">
            <div>
              <span className="text-left">CGK</span>
            </div>
            <div>
              <span className="text-left">15:15</span>
            </div>
          </div>
          <div className="col-6 text-center header-card-plane">
            <div>
              <span className="fw-bold">Cloths</span>
            </div>
            <div>
              <span className="mb-0">
                - - - -{" "}
                <img
                  src={PlaneIcon}
                  className="card-request-icon"
                  alt="location-img"
                />{" "}
                - - - -
              </span>
            </div>
          </div>
          <div className="col-3 header-card-depart-arriv">
            <div className="text-right">
              <span>DPS</span>
            </div>
            <div className="text-right">
              <span>17:15</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body request-card-border">
        <div className="row">
          <div className="col-7 request-body-info">
            <div>
              <span className="card-text">Size: 35*35*36</span>
            </div>
            <div>
              <span className="card-text">Weight: 1.2KG</span>
            </div>
            <div>
              <span className="card-text">Item Value: 250$</span>
            </div>
          </div>
          <div className="col-5 request-body-package">
            <div>
              <span>Package ID</span>
            </div>
            <div>
              <span>TRV2569857</span>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-7 request-body-date">
            <div>
              <span className="card-text">Shipping Deadline:</span>
            </div>
            <div>
              <span className="card-text">05/05/2022</span>
            </div>
          </div>
          <div className="col-5" style={{ textAlign: "right" }}>
            <button type="button" className="btn btn-lg offer-btn">
              Offer $120
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer bg-transparent request-card-border request-card-footer">
        <button
          type="button"
          className="btn btn-lg more-detail-btn"
          onClick={() => setShowMoreDetail(!showMoreDetail)}
        >
          More Details
        </button>
        <button type="button" className="btn btn-lg make-offer-btn">
          Accept / Make Offer
        </button>
      </div>
      {showMoreDetail && (
        <div className="more-detail-wrapper">
          <a
            className="close-card-btn"
            onClick={() => setShowMoreDetail(false)}
          >
            {" "}
            <FontAwesomeIcon icon={faClose} />
          </a>

          <div className="card mb-3 request-card-wrapper">
            <div className="card-header bg-transparent">
              <div>
                <span>Owner:</span> Jacob Arlington
                <a onClick={() => setShowDropdown(!showDropdown)}>
                  <img
                    src={
                      showDropdown
                        ? CertificateGreenIcon
                        : CertificateYellowIcon
                    }
                    alt="profile-img"
                  />
                </a>
              </div>
              {showDropdown && (
                <div className="dropdown-card-info">
                  <a className="dropdown-item my-1" href="/">
                    <FontAwesomeIcon icon={faCheck} /> Profile Picture
                  </a>
                  <a className="dropdown-item my-1" href="/">
                    <FontAwesomeIcon icon={faCheck} /> Valid Passport
                  </a>
                  <a className="dropdown-item my-1" href="/">
                    <FontAwesomeIcon icon={faCheck} />
                    ID Validation (Passport)
                  </a>
                  <a className="dropdown-item my-1" href="/">
                    <FontAwesomeIcon icon={faCheck} />
                    Proof of address
                  </a>
                  <a className="dropdown-item my-1" href="/">
                    <FontAwesomeIcon icon={faCheck} />
                    Successful Transaction (10+)
                  </a>
                  <a className="dropdown-item my-1" href="/">
                    <FontAwesomeIcon icon={faCheck} />
                    Rating ( 4.5/5 )
                  </a>
                </div>
              )}
              <div>
                <span>Accepted Delivery Type:</span> Pickup,Post, Drop Off
              </div>
            </div>
            <div className="card-body request-card-border location-card-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod massa augue, non venenatis
              </p>
              <div className="text-left">
                <span className="location-title">Location:</span>
              </div>
              <div>
                <p className="location-description">
                  No2, FCUK Street, Ontario, Canada
                </p>
              </div>
              <div className="text-left mb-1">
                <span className="location-title">Images: </span>
              </div>

              <div className="row image-card-wrapper">
                <div className="col-3">
                  <img src={PackageImg01} alt="package-img" />
                </div>
                <div className="col-3">
                  <img src={PackageImg02} alt="package-img" />
                </div>
                <div className="col-3">
                  <img src={PackageImg03} alt="package-img" />
                </div>
                <div className="col-3">
                  <img src={PackageImg04} alt="package-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailableCard;
